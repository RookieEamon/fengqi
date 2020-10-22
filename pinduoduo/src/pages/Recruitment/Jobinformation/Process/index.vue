<template>
   <!-- 右侧内容 -->
    <div class="right">
        <!-- 标题 -->
        <div class="title">
            招聘流程
        </div>

        <!-- 信息容器  重复 封装组件-->
        <!-- 1 -->
        <div class="infoContainer">
            <!-- 图片 -->
            <div class="img">
                <img src="https://careers.pinduoduo.com/api/careers/file/download/uncheck?param=api%2Ffile%2FdownloadFile%3FfileName%3D59ffb342041741e1954c84cf57ab59511%20%E6%8B%B7%E8%B4%9D.jpg%26fileAttribution%3Drecruit"
                    alt="">
            </div>

            <!-- 信息元素 每个信息内容 -->
            <div class="infoItem">
                <!-- 信息内容部分 -->
                <div class="infoItemContent">
                    <p class="jobDuty">注意事项</p>
                    <div class="jobDetail">
                        <p>1.登录拼多多校园招聘官网或“拼多多校园招聘”小程序，注册账号并投递简历</p>
                        <p>2.每位同学可根据个人意向，申请第一意愿职位，并选择是否接受相关岗位调剂（若接受调剂，则可申请第二意愿职位）。若简历筛选通过，我们将优先第一意愿职位，尽快安排线上笔试及测评
                        </p>
                        <p>3.面试站点选择</p>
                        <p>【技术岗】优先所在学校的地点为面试站点，且技术岗所有站点都可支持远程面试。</p>
                        <p>【非技术岗】暂不支持远程面试，请就近选择有现场面试行程，且可到场参加面试的城市为面试站点。 </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2 -->
        <div class="infoContainer">
            <!-- 图片 -->
            <div class="img">
                <img src="https://careers.pinduoduo.com/api/careers/file/download/uncheck?param=api%2Ffile%2FdownloadFile%3FfileName%3D598ffe9a92464ebd9678b1e11250987d2%20%E6%8B%B7%E8%B4%9D.jpg%26fileAttribution%3Drecruit"
                    alt="">
            </div>

            <!-- 信息元素 每个信息内容 -->
            <div class="infoItem">

                <!-- 信息内容部分 -->
                <div class="infoItemContent">
                    <div class="jobDetail">
                        <p>【笔试形式】若简历筛选通过，我们将优先第一意愿职位，尽快安排线上笔试及测评。</p>
                        <p>技术岗：技术专业笔试+个性测评</p>
                        <p>非技术岗：综合能力测试（除设计管培生）+个性测评</p>
                        <p>【笔试通知】一般通过邮件或短信形式发送通知，请注意查收。</p>
                        <p>【注意事项】拼多多2021届校招（技术岗/非技术岗）的线上笔试环节，包含以上两项测试内容。两项测试结果将同时作为是否通过笔试环节的判断依据及参考，请收到笔试邀请的同学们务必按时参加~
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3 -->
        <div class="infoContainer">
            <!-- 图片 -->
            <div class="img">
                <img src="https://careers.pinduoduo.com/api/careers/file/download/uncheck?param=api%2Ffile%2FdownloadFile%3FfileName%3D23c3d23b0dca4e59997b1b61e39aa7ab3%20%E6%8B%B7%E8%B4%9D.jpg%26fileAttribution%3Drecruit"
                    alt="">
            </div>

            <!-- 信息元素 每个信息内容 -->
            <div class="infoItem">
                <!-- 信息内容部分 -->
                <div class="infoItemContent">
                    <p class="jobDuty">注意事项</p>
                    <div class="jobDetail">
                        <p>1.登录拼多多校园招聘官网或“拼多多校园招聘”小程序，注册账号并投递简历</p>
                        <p>2.每位同学可根据个人意向，申请第一意愿职位，并选择是否接受相关岗位调剂（若接受调剂，则可申请第二意愿职位）。若简历筛选通过，我们将优先第一意愿职位，尽快安排线上笔试及测评
                        </p>
                        <p>3.面试站点选择</p>
                        <p>【技术岗】优先所在学校的地点为面试站点，且技术岗所有站点都可支持远程面试。</p>
                        <p>【非技术岗】暂不支持远程面试，请就近选择有现场面试行程，且可到场参加面试的城市为面试站点。 </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 4 -->
        <div class="infoContainer">
            <!-- 图片 -->
            <div class="img">
                <img src="https://careers.pinduoduo.com/api/careers/file/download/uncheck?param=api%2Ffile%2FdownloadFile%3FfileName%3Dc5e8f5267bea4546a47d3a68bd4618ec4%20%E6%8B%B7%E8%B4%9D.jpg%26fileAttribution%3Drecruit"
                    alt="">
            </div>

            <!-- 信息元素 每个信息内容 -->
            <div class="time">
                <!-- 信息内容部分 -->
                我们会第一时间向面试通过的同学确认录用意向，并分批发放offer,直至本次校招结束。
            </div>
        </div>


    </div>
</template>

<script>
export default {
  name: 'Process',
}
</script>

<style lang = 'less' rel='stylesheet/less' scoped>
/* 右侧信息区域 */
.right {
    width: 900px;
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;

    //  标题部分
    .title {
        background-color: white;
        height: 70px;
        font-size: 28px;
        color: black;
        line-height: 70px;
        padding-left: 20px;
        margin-bottom: 30px;

    }

    //信息容器部分  主体部分
    .infoContainer {
        display: flex;
        width: 850px;
        background-color: white;
        margin: 0 auto;
        margin-right: 30px;
        margin-bottom: 30px;
        padding: 24px;
        cursor: pointer;

        position: relative;

        //图片
        .img {
            margin-right: 30px;
        }

        // 信息元素 每个信息
        .infoItem {


            //信息内容部分
            .infoItemContent {
                display: flex;
                flex-direction: column;

                .jobDuty {
                    font-size: 18px;
                    color: #595959;
                    padding-bottom: 20px;
                }

                .jobDetail {
                    font-size: 16px;
                    color: #595959;
                    line-height: 2;
                }

                .provideTime {
                    font-size: 16px;
                    color: #595959;
                    line-height: 2;

                }
            }

            
        }

        //第四部分面试通知时间
        .time {
            
            height: 16px;
            font-size: 16px;
            color: #595959;
            line-height:16px;
            margin-left: 230px;
            
            position:absolute;
            top:50%;
            transform: translateY(-50%); /*自己的50% */
        }
    }
}
</style>
