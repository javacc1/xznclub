<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model{
//    指定表名
    protected $table = 'student';


//    使用时间字段
    public $timestamps = true;

//    指定允许批量复制的字段
    protected $fillable = ['name','sex','created_at','updated_at'];

//    指定不允许批量赋值的字段
    protected $guarded = [];

}