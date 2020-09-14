<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shengjing extends Model
{
//    指定表名
    protected $table = 'shengjing';

//    指定id
//    protected $primaryKey = 'id';


    protected $fillable = ['zhangjie_name','zhangjie_num','id','zhangjie_summary'];
    //  是否使用时间created_at 和updated_at
    public $timestamps =false;
}
