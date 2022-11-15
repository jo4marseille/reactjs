import { useEffect, useState } from "react"
import axios from "axios";

export default function Translators()
{
    const [listTranslators, setListTranslators] = useState([]);

    const categories = {
        "vol": "Volunteer",
        "pro": "Professional",
        "stu": "Student"
    }
    
    useEffect(() => {
        //console.log(JSON.parse(localStorage.getItem("translators")));

        //setListTranslators( JSON.parse(localStorage.getItem("translators")) );

        axios.get("http://127.0.0.1:8000/api/translator/getalls").then((res) => {
            console.log(res.data);

            setListTranslators(res.data);
        });
    }, []);

    //getTranslators();
    
    return (
        <>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Siret</th>
                        <th scope="col">School</th>
                        <th scope="col">Language</th>
                    </tr>
                
                
                    {
                        listTranslators.map((t) => {
                            return (
                                <>
                                    <tr>
                                        <td>{t.name}</td>
                                        <td>{categories[t.category]}</td>
                                        <td>{t.email}</td>
                                        <td>{t.tel}</td>
                                        <td>{t.siret}</td>
                                        <td>{t.school}</td>
                                        <td>{t.language}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                
                </thead>
            </table>
        </>
    )
}