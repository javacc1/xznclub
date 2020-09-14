<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    @yield('css_js')

</head>
<body>
@yield('app_content_view_body')
</body>
@yield('footer_js')
</html>