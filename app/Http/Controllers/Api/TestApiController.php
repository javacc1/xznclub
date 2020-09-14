<?php


namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;


class TestApiController extends Controller
{
    public function list(){
       $data=DB::select('SELECT * FROM shengjing LIMIT 20');
       if ($data)
           return response()->json(['status'=>1,'msg'=>'查询成功！','data'=>$data]);
       else
           return response()->json(['status'=>0,'msg'=>'对应数据不存在']);


    }
}
