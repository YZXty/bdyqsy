/**
 * Created by Administrator on 2016/8/25.
 */
    $(function(){
        $('#fullpage').fullpage({



            //配置背景颜色
            // sectionsColor:['red','#f04','#9b0','#d3f'],

            //配置幻灯片切换是否显示箭头，默认true
            controlArrows:false,

            //配置每页内容页面是否垂直居中，默认false
            verticalCentered:true,

            //配置文字是否随着窗口变化而变化，默认false
            resize:true,

            //配置页面滚动速度,默认700
            scrollingSpeed:1000,

            //配置锚链接，不应该和autoScrolling，scrollBar一起使用
            anchors:['page1','page2','page3','page4'],

            //配置锚点切换时候是否有过度动画，默认true
            animateAnchor:false,

            //锁定配置的锚链接是否显示，默认false
            lokAnchors:true,

            //配置动画由css3还是jquery来执行，默认true
            css3:true,

            //配置滚动到顶部之后是否从底部循环滚动，默认false
            // loopTop:true,

            //相反从底部循环滚动，默认false
            // loopBottom:true,

            //设置页面是否循环滚动与loopTop，loopBottom不兼容,默认是false
           // continuousVertical:true,

            //幻灯片是否循环滚动，默认true
            loopHorizontal:false,

            //配置是否按照插件的方式来进行滚动，默认true,和锚点不应该一起使用，一般不设置或者保持默认
            autoScrolling:true,

            //滚动的时候是否包含滚动条,默认false,和锚点不应该一起使用，一般不设置或者保持默认
            scrollBar:false,

            //配置页面上下间距，默认0，如果需要设置固定顶部和顶部菜单导航配合使用
            // paddingTop：'300px',
            paddingBottom:0,

            //配置页面是否有固定的DOM
            fixedElements:'#header',

            //配置是否支持键盘方向键控制页面切换，默认true
            keyboardScrolling:true,

            //配置是否激活浏览器前进后退功能，如果页面设置了不按照插件的方式来滚动该配置也失效，默认true
            recordHistory:true,

            //配置菜单
            menu:'#fullpageMenu',

            //配置导航,位置，提示,显示当前位置
            navigation:true,
            navigation:'right',
            navigationTooltips:['登陆百度舆情','领先：数据收集与整理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
            showActiveTooltip:true,

            //配置幻灯片是否显示导航,和位置
            slidesNavigation:true,
            slidesNavPosition:'bottom',

            //配置内容超过容器是否显示滚动条，模式true,
            scrollOverflow:true,

            //修改section和幻灯片默认CLASS
            // sctionSelector:
            // slideSelector:

            afterLoad: function(anchorLink, index){
                if(index==1){
                    $(".ship").animate({left:"360px"},1000)
                }
                if(index==2){
                    $(".ss").animate({width:"300px"},2000)
                    $(".tutu2").animate({right:"370px",opacity:1},200)
                }
                if(index==3){
                    $(".tutu3").animate({right:"370px",opacity:1},200)

                }
                if(index==4){
                    $(".tutu4").animate({right:"370px",opacity:1},200)
                }
            },
            onLeave: function (index,nextindex,direction) {
                if(index==1||direction=='down'){
                    $(".ship").animate({left:"310px"},1000)
                }
                if(index==2||direction=="up"){
                    
                }
                if(index==2||direction=="down"){
                    $(".tutu2").css({"right":"210px","opacity":0.1})

                }
                if(index==3||direction=="down"){
                    $(".tutu3").css({"right":"210px","opacity":0.1})

                }
                if(index==4||direction=="up"){
                    $(".tutu4").css({"right":"210px","opacity":0.1})

                }
            }
        });
    })
