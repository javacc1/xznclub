<?php

namespace App\Console\Commands;

use App\Models\Shengjing;
use Illuminate\Console\Command;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'index_test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Shengjing::orderBy('id','asc')->chunk(100,function ($data){
           foreach ($data as $item){
               $item->zhangjie_name = str_replace('--','',$item->zhangjie_name);
//               $item->zhangjie_name .='---------';
               $item->save();
               $this->info($item->id);
           }
        });
    }
}
