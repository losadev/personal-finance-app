<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('pots', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pots', function (Blueprint $table) {
<<<<<<< HEAD:backend/database/migrations/2026_06_28_093457_add_user_id_to_pots_table.php
            $table->dropForeign(['user_id']);
            $table->dropColumn('user_id');
=======
            $table->dropForeign("user_id");
            $table->dropColumn("user_id");
>>>>>>> feat/filtering-transactions:backend/database/migrations/2026_05_08_153854_add_user_id_to_pots.php
        });
    }
};