<template>
  <div>
          <!-- 主体内容 -->
    <div class="cooperationContainer">
        <!-- 轮播图 -->
        <div class="banner">
            <p></p>
            <h1>拼多多商务合作</h1>
            <div class="line"></div>
            <div class="slogan">诚信合作 <span></span> 本分做事 <span></span> 携手共赢</div>
        </div>
        <!-- 公告 -->
        <div class="notic">
            <div class="noticItem">
                <div class="noticTitle">
                    <h3>采购公告</h3>
                    <span>查看更多</span>
                </div>
                <div class="noticContent">
                    <div class="contentItem">
                        <p>拼多多招采信息平台使用手册V1.0</p>
                        <span>2020-06-24</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多员工餐供餐项目供应商寻源</p>
                        <span>
                            2020-06-21</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多客服外包项目供应商寻源采购公告</p>
                        <span>2020-06-05</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多采购“廉正”告知书</p>
                        <span>2020-06-04</span>
                    </div>
                </div>
            </div>
            <div class="noticItem">
                <div class="noticTitle">
                    <h3>采购公告</h3>
                    <span>查看更多</span>
                </div>
                <div class="noticContent">
                    <div class="contentItem">
                        <p>拼多多招采信息平台使用手册V1.0</p>
                        <span>2020-06-24</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多员工餐供餐项目供应商寻源</p>
                        <span>
                            2020-06-21</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多客服外包项目供应商寻源采购公告</p>
                        <span>2020-06-05</span>
                    </div>
                    <div class="contentItem">
                        <p>拼多多采购“廉正”告知书</p>
                        <span>2020-06-04</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 合作流程 -->
        <div class="processWrappper">
            <div class="processMain">
                <div class="processTitle">
                    <div class="noticTitle">
                        <h3>供应商合作流程</h3>
                    </div>
                </div>
                <div class="processItem first">
                    <div class="ico"><span class="iconfont icon-zhuce"></span></div>
                    <span>注册账号</span>
                </div>
                <div class="processItem">
                    <div class="ico"><span class="iconfont icon-bianji"></span></div>
                    <span class="longer">添加公司信息
                    </span>
                </div>
                <div class="processItem">
                    <div class="ico"><span class="iconfont icon-yinzhang"></span></div>
                    <span>申请资质</span>
                </div>
                <div class="processItem">
                    <div class="ico"><span class="iconfont icon-chuiziicon"></span></div>
                    <span>发起投标</span>
                </div>
                <div class="processItem">
                    <div class="ico"><span class="iconfont icon-qiandai"></span></div>
                    <span class="longer">填写收款信息</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Cooperation',
  }
</script>
<style lang='less' rel='stylesheet/less' scoped>
@import url('./static//icon_font/iconfont.css');
 .cooperationContainer {
    width: 100%;
    // banner
    .banner {
        margin-top: 111px;
        width: 100%;
        height: 514px;
        background-image: url(https://pinduoduoimg.yangkeduo.com/srm/banner1.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-top: 1px solid transparent;
        h1{
            font-size: 64px;
            line-height: 64px;
            color: white;
            font-weight: bold;
            margin-left: 418px;
            margin-top: 140px;
        } 
        .line{
            height: 1px;
            margin: 24px 0;
            background: linear-gradient(270deg, rgba(255,255,255,0.1) 0%, #fff 50%, rgba(255,255,255,0.1) 100%);
            opacity: 0.6;
            width: 572px;
            margin-left: 350px;
        }
        .slogan{
            font-size: 32px;
            color: white;
            margin-left: 400px;
            span{
                display: inline-block;
                border: 4px solid white;
                border-radius: 50%;
                position: relative;
                top: -5px;
                margin: 0 15px;
            }
        }
    }
    // 公告
    .notic{
        width: 1200px;
        margin: 32px auto 0;
        height: 300px;
        display: flex;
        justify-content: space-between;
        .noticItem{
            width: 576px;
            height: 300px;
            .noticTitle{
                height: 30px;
                width: 100%;
                padding-bottom: 12px;
                border-bottom: 1px solid #eee;
                position: relative;
                margin-bottom: 32px;
                &::after{
                    content: '';
                    width: 48px;
                    height: 4px;
                    background-color: rgb(252, 71, 93);
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                }
                h3{
                    font-size: 24px;
                    line-height: 30px;
                    float: left;
                }
                span{
                    float: right;
                    line-height: 30px;
                    margin-top: 5px;
                    color: #2266aa;
                    cursor: pointer;
                    font-size: 14px;
                }
            }
            .noticContent{
                width: 100%;
                padding: 15px 0px;
                height: 135px;
                border: 1px solid #eee;
                margin: 0 auto;
                box-shadow:  3px 3px 3px#eee;
                .contentItem{
                    width: 100%;
                    height: 34px;
                    padding: 10px 0 10px 32px;
                    box-sizing: border-box;
                    position: relative;
                    &:hover p{
                        color: #fc4c5d;
                    }
                    &::before{
                        background-color: #fc4c5d;
                        content: '';
                        position: absolute;
                        width: 4px;
                        height: 4px;
                        top: 15px;
                        left: 18px;
                    }
                    &::after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                    p{
                        font-size: 14px;
                        color: rgba(0,0,0,0.8);
                        float: left;
                        cursor: pointer;
                    }
                    span{
                        float: right;
                        font-size: 14px;
                        color: rgba(0,0,0,0.4);
                        margin-right: 25px;
                    }

                }
            }
        }
    }
    //合作流程
    .processWrappper{
        width: 100%;
        height: 352px;
        background-color: #eee;
        padding: 32px 0 116px;
        .processMain{
            width: 1200px;
            margin: 0 auto;
            // background-color: pink;
            height: 205px;
            // padding-top: 10px;
            box-sizing: border-box;
            .noticTitle{
                height: 30px;
                width: 100%;
                padding-bottom: 12px;
                border-bottom: 1px solid #eee;
                position: relative;
                margin-bottom: 32px;
                &::after{
                    content: '';
                    width: 48px;
                    height: 4px;
                    background-color: rgb(252, 71, 93);
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                }
                h3{
                    font-size: 24px;
                    line-height: 30px;
                    float: left;
                }
            }
            .processItem{
                width: 72px;
                height: 110px;
                // background-color: purple;
                // margin-top: 70px;
                margin-left: 170px;
                text-align: center;
                position: relative;
                float: left;
                &::after{
                    content: '';
                    width: 104px;
                    height: 2px;
                    background-color: rgb(252, 71, 93);
                    position: absolute;
                    top: 40px;
                    left: 104px;
                    margin-right: 32px; 
                }
                &:last-child::after{
                    background-color: transparent;
                }
                &.first{
                    margin-left: 100px;
                }
                .ico{
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background-color: #fff;
                    margin-bottom: 20px;
                    .iconfont{
                        font-size: 30px;
                        line-height: 72px;
                        color:rgb(252, 71, 93);
                    }
                }
                span{
                    font-size: 14px;
                    color: rgba(0,0,0,0.8);
                    white-space: nowrap;
                }
                span.longer{
                    display: inline-block;
                    margin-left: -5px;
                }
            }
        }
    }
}
</style>