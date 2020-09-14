<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','Html\IndexTestController@index');
Route::get('/test/{id}','Html\IndexTestController@list');
Route::get('/crud/','Html\CrudTestController@index');
Route::get('/orm1/','Html\CrudTestController@orm1');
Route::post('/ct', 'Api\TestApiController@list');