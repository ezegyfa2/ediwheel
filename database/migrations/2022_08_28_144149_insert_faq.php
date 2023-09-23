<?php

use Illuminate\Database\Migrations\Migration;

class InsertFaq extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::table('faq')->insert($this->getQuestions());
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach ($this->getQuestions() as $question) {
            \DB::table('faq')->where($question)->delete();
        }
    }

    public function getQuestions() {
        return [
            [
                'question' => 'What kind of vehicle is the diwheel?',
                'answer' => 'The diwheel is a vehicle with two parallel wheels, side by side, unlike single-track vehicles such as motorcycles and bicycles, which have two wheels inline.',
            ],
            [
                'question' => 'What is the main advatage of eDI?',
                'answer' => 'It has one of the lowest energy consumption among the covered vehicles.'
            ],
            [
                'question' => 'What is the target price of eDI?',
                'answer' => 'When the mass production starts at 2023 a new eDI will be $12000.'
            ],
            [
                'question' => 'How do I drive eDI?',
                'answer' => 'It has a special steering wheel which adjusts the speed of the wheels based on gyroscope technology.'
            ],
            [
                'question' => 'What engine does eDI use?',
                'answer' => 'It uses axial flux PMSM motor, the most effective type of electric motors.'
            ],
            [
                'question' => 'How does eDI turn around?',
                'answer' => 'When its wheels move in opposite directions, the vehicle turns, just like a hoverboard.'
            ],
        ];
    }
}
