<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/Book', [BookController::class, 'index']);
Route::get('/Book/{id}', [BookController::class, 'show']);
Route::post('/Book', [BookController::class, 'store']);
Route::put('/Book/{id}', [BookController::class, 'update']);
Route::delete('/Book/{id}', [BookController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
