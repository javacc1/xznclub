<?php

namespace App\Http\Controllers\Html;

use App\Http\Controllers\Controller;
use App\Models\Shengjing;
use App\Models\Student;
use Illuminate\Support\Facades\DB;

class CrudTestController extends Controller
{
    public function index()
    {
//        get 返回符合条件的结果集
//        $shengjing = DB::table('shengjing')->get();
//        dd($shengjing);


//        first()
//        $fist_num = DB::table('shengjing')->orderBy('id','desc')->first();
//        dd($fist_num);

//      where()和whereRaw()

//        $where_num = DB::table('shengjing')->where('id','<=',10)->get();
//        $where_num = DB::table('shengjing')->whereRaw('zhangjie_num<=4 and id >10')->get();
//        dd($where_num);

//        pluk()

//        $pluk_num = DB::table('shengjing')->where('id','<=',10)->pluck('id','zhangjie_name');
//        dd($pluk_num);

//        lists()已被pluk()取代
//        select()
//        $select_num = DB::table('shengjing')->select('id','zhangjie_num','zhangjie_name')->where('id','<',20)->get();
//        dd($select_num);

//        chunk()
        DB::table('shengjing')->orderBy('id')->chunk(100, function ($shengjing, $index) {
            dump($shengjing);
        });
    }

    public function orm1()
    {
//        $student = Student::create(['name'=>'小红','sex'=>'女']); //创建一条数据
        $student = Student::firstOrCreate(['name'=>'小红']);//根据插入的字段内容在表里是否存在，来决定是否创建数据
        dd($student);

    }
}
