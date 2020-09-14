@extends('index_test.layout.comm_test_i')

@section('app_content_view_body')
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="content">
        <div class="title m-b-md">
            Laravel List
        </div>
        <div class="links">
            <a href="/">进入首页</a>
        </div>
    </div>
</div>

@endsection
