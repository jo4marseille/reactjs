<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\translators;

class TranslatorController extends Controller
{
    function create(Request $req)
    {
        try
        {
            $translator = new translators();

            $translator->name = $req->get("name");
            $translator->category = $req->get("category");
            $translator->email = $req->get("email");
            $translator->tel = $req->get("tel");
            $translator->siret = $req->get("siret");
            $translator->school = $req->get("school");
            $translator->language = $req->get("language");

            $translator->save();
        }
        catch(\Exception $e)
        {
            echo json_encode([$e->getCode(), $e->getMessage()]);
        }
    }

    public function getAlls()
    {
        $translators = translators::all();

        //var_dump($translators->toArray());

        return json_encode($translators->toArray());
    }
}
