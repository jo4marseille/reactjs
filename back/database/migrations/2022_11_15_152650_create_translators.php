<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTranslators extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('translators', function (Blueprint $table) {
            $table->id();
            $table->string("name")->nullable();
            $table->string("category")->nullable();
            $table->string("email")->unique()->nullable();
            $table->string("tel")->unique()->nullable();
            $table->string("siret")->unique()->nullable();
            $table->string("school")->unique()->nullable();
            $table->string("language")->unique()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('translators');
    }
}
