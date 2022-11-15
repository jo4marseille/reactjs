import { useState } from "react"
import AddTranslator from "../components/addTranslator";

export default function Form()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [siret, setSiret] = useState("");
    const [school, setSchool] = useState("");
    const [language, setLanguage] = useState("");
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
                            <label for="exampleInputEmail1" class="form-label mt-4">Your name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="form-group">
                            <label for="exampleSelect1" class="form-label mt-4">Your category</label>
                            
                            <select class="form-select" id="exampleSelect1" onChange={(e) => setCategory(e.target.value)}>
                                <option value="vol">Volunteer</option>
                                <option value="pro">Professional</option>
                                <option value="stu">Student</option>
                            </select>

                            {
                                category == "vol" &&
                                
                                <div class="form-group">
                                    <label for="exampleInputEmail1" class="form-label mt-4">Phone number</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" onChange={(e) => setTel(e.target.value)} />
                                </div>
                            }

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
                        <div class="form-group">
                            <label for="exampleSelect2" class="form-label mt-4">Example multiple select</label>
                            <select multiple="" class="form-select" id="exampleSelect2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="formFile" class="form-label mt-4">Default file input example</label>
                            <input class="form-control" type="file" id="formFile" />
                        </div>
                        <fieldset class="form-group">
                        <legend class="mt-4">Radio buttons</legend>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                            <label class="form-check-label" for="optionsRadios1">
                            Option one is this and that—be sure to include why it's great
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                            <label class="form-check-label" for="optionsRadios2">
                            Option two can be something else and selecting it will deselect option one
                            </label>
                        </div>
                        <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                            <label class="form-check-label" for="optionsRadios3">
                                Option three is disabled
                            </label>
                        </div>
                        </fieldset>
                        <fieldset class="form-group">
                        <legend class="mt-4">Checkboxes</legend>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                            Default checkbox
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                            <label class="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                            </label>
                        </div>
                        </fieldset>
                        <fieldset class="form-group">
                        <legend class="mt-4">Switches</legend>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                        </div>
                        </fieldset>
                        <fieldset class="form-group">
                            <legend class="mt-4">Ranges</legend>
                                <label for="customRange1" class="form-label">Example range</label>
                                <input type="range" class="form-range" id="customRange1" />
                                <label for="disabledRange" class="form-label">Disabled range</label>
                                <input type="range" class="form-range" id="disabledRange" disabled="" />
                                <label for="customRange3" class="form-label">Example range</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3" />
                        </fieldset>
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