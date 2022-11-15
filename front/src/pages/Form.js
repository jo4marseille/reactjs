import { useState } from "react"
import AddTranslator from "../components/addTranslator";
import Navbar from "../components/Navbar";

export default function Form()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [siret, setSiret] = useState("");
    const [school, setSchool] = useState("");
    const [language, setLanguage] = useState("Catalan");
    const [category, setCategory] = useState("vol");
    const [step, setStep] = useState("form");

    const languages = [
        "Catalan",
        "Danish",
        "Dutch",
        "Faroese",
        "Finnish",
        "Flemish",
        "French",
        "German",
        "Greek",
        "Icelandic",
        "Italian",
        "Norwegian",
        "Portuguese",
        "Spanish",
        "Swedish",
        "UK English / British English"
    ]

    //console.log(category);
    
    return (
        <div class="container">
            <Navbar/>
            {
                step == "form" &&

                <form>
                    <fieldset>
                        <legend>Welcome translator !</legend>
                        
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Your name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Your email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Your category</label>
                            
                            <select class="form-select" id="exampleSelect1" required="true" onChange={(e) => setCategory(e.target.value)}>
                                <option value="vol">Volunteer</option>
                                <option value="pro">Professional</option>
                                <option value="stu">Student</option>
                            </select>

                            <div class="form-group">
                                <label for="exampleInputEmail1" class="form-label mt-4">Phone number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={tel} placeholder="Enter your phone number" onChange={(e) => setTel(e.target.value)} />
                            </div>

                            {
                                category == "pro" &&
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label mt-4">Siret</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your siret" onChange={(e) => setSiret(e.target.value)} />
                                </div>
                            }

                            {
                                category == "stu" &&
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label mt-4">Your school</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your school" onChange={(e) => setSchool(e.target.value)} />
                                </div>
                            }

                        </div>
                        
                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Your language</label>
                            <select class="form-select" id="exampleSelect1" onChange={(e) => setLanguage(e.target.value)}>
                            {
                                languages.map((lang) => {
                                    return(<option value={lang}>{lang}</option>)
                                })
                            }
                            </select>

                        </div>
                        <br/>
                        <button type="submit" class="btn btn-primary" onClick={() => setStep("register")}>Register</button>
                    </fieldset>
                </form>
            }

            {
                step == "register" &&

                <AddTranslator Name={name} Category={category} Tel={tel} Email={email} Siret={siret} School={school} Language={language} />
            }
        </div>
    )
}