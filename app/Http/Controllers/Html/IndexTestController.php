<?php
namespace App\Http\Controllers\Html;
use App\Http\Controllers\Controller;


class IndexTestController extends Controller
{
    public function index(){
        return view('index_test.index');
    }
    public function list($id){

        return view('index_test.list',compact('id'));
    }
}
