

export default function AddTranslator(props)
{
    function register()
    {
        //localStorage.setItem("translators", JSON.stringify(props));
        //console.log("In register");

        function mail_in_array(email)
        {
            if(localStorage.getItem("translators") == undefined)
            {
                return false;
            }

            let translators = JSON.parse(localStorage.getItem('translators'));

            //console.log(translators);

            translators.map((t) => {
                //console.log(t.Email, email);
                
                if(t.Email == email)
                {
                    return true;
                }
            });

            return false;
        }

        if(localStorage.getItem("translators") == undefined)
        {
            let translators = [];

            translators.push(props);
            
            if(!mail_in_array(props.Email))
                localStorage.setItem("translators", JSON.stringify(translators));

            //console.log(JSON.stringify(props));
        }
        else
        {
            let translators = JSON.parse(localStorage.getItem('translators'));

            if(!mail_in_array(props.Email))
            {
                translators.push(props);
                localStorage.setItem("translators", JSON.stringify(translators));
            }

            //console.log(translators);
        }


        /*axios.post("http://127.0.0.1:8000/api/translator/save", {
            name: props.Name,
            category: props.Category,
            email: props.Email,
            tel: props.Tel,
            siret: props.Siret,
            school: props.School,
            language: props.Language
        }).then(function(res){
            //console.log(res);
            if(res.data[0] == 23000)
            {
                setError("already_exists");
            }
        });*/

    }

    register();
    
    return (
        
        <>
            Thanks you for your registration {props.Name} !
        </>
    )
}