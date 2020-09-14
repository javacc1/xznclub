<?php
namespace  App\Admin\Extensions;
use Encore\Admin\Form\Field;

class Ueditor extends Field
{
    protected static $css = [
    ];
    public static $isJs=false;
    protected static $js = [
        /*ueditor1433文件夹为第二步中自定义的文件夹*/
        'vendor/ueditor/ueditor.config.js',
        'vendor/ueditor/ueditor.all.js',
    ];
    protected $view = 'admin.Ueditor';
    public function render()

    {

        $this->script = <<<EOT

        //解决第二次进入加载不出来的问题

        UE.delEditor("ueditor");

        // 默认id是ueditor

        var ue = UE.getEditor('ueditor', {

            // 自定义工具栏

            toolbars: [

                ['bold', 'italic', 'underline', 'strikethrough', 'blockquote', 'insertunorderedlist', 'insertorderedlist', 'justifyleft', 'justifycenter', 'justifyright', 'link', 'insertimage', 'source', 'fullscreen']

            ],

            elementPathEnabled: false,

            enableContextMenu: false,

            autoClearEmptyNode: true,

            wordCount: false,

            imagePopup: false,

            autotypeset: {indent: true, imageBlockLine: 'center'}

        });

        ue.ready(function () {

            ue.execCommand('serverparam', '_token', '{{ csrf_token() }}');

        });

 

EOT;

        return parent::render();

    }

}