<?php
namespace App\Http\Controllers\Html;

use App\Http\Controllers\Controller;
use App\Models\Shengjing;


class WelcomeController extends Controller{
    public function welcome(){
        return view('Layout.welcome');
    }
    public function index($id){
//        $data1 = [
//            'zhangjie_name'=>'自定义添加',
//            'zhangjie_num'=>2,
//            'zhangjie_summary'=>"大技能滴啊送家电及极大！！"
//        ];
//        Shengjing::insert($data1);//插入数据；
//        Shengjing::where('id',1)->update(["zhangjie_name"=>'创世纪']);//更新表的记录(修改)
//        Shengjing::where("id",1)->delete();//删除表中id为一的记录仅删除记录
//        Shengjing::truncate();//删除表中所有的记录以及表的结构
        $data = Shengjing::select('zhangjie_name','zhangjie_num')->groupBy('zhangjie_name')->get()->toarray();
//        dd($data);

        return view('Layout.index_test',['data'=>$data]);
    }
}