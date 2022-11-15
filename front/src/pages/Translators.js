import { useEffect, useState } from "react"


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

        setListTranslators( JSON.parse(localStorage.getItem("translators")) );
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
                                        <td>{t.Name}</td>
                                        <td>{categories[t.Category]}</td>
                                        <td>{t.Email}</td>
                                        <td>{t.Tel}</td>
                                        <td>{t.Siret}</td>
                                        <td>{t.School}</td>
                                        <td>{t.Language}</td>
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