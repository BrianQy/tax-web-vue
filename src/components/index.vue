<template>

    <div class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                 <div class="text-left">
					<p class="wenzi">个人税款计算</p>
                        <p class="wenzi2"> 企业版</p>
                            <h3>
                                在线快速计算多人数的个人所得税，省心省力，助您办公。
                                 </h3>
                                 <br> <br>
                            <p>
            
                                    <router-link to="/calculate" class="buttongo" >计算</router-link>
                                    <router-link to="/about" class="buttongob">了解更多</router-link>
                
                                    <!-- <router-link to="/login" class="btn btn-lg btn-default">Login</router-link>
                                    <router-link to="/register" class="btn btn-lg btn-default">Register</router-link> -->
                    
                            </p>
           
            
          
                </div>
             </div>
        </div>	
    </div>

            
</template>
<script>

export default {
  name:"index",
 
}

</script>

<style scoped>
.wenzi
{
	font-size:70px;
	font-weight:bold;
	/* font-family:"Times New Roman", Times, serif; */
	margin-top:200px;
	/* text-shadow: 2px 2px 2px #ffffff; */
}
.wenzi2
{
	font-size:50px;
	font-weight:bold;
	color: #18262a;
	/* font-family:"Times New Roman", Times, serif; */
	margin-top:10px;
	margin-left: 10px;
	margin-bottom:2px;
	text-shadow: 1px 1px 1px #ffffff;
}
.buttongo
{
	-webkit-transition-duration: 0.4s; 
	transition-duration: 0.4s;
	border-radius: 40px;
	background-color: #e76d45; 
	border: none;
	color: white;
	padding: 25px 50px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 20px;
	margin-bottom: 200px;
	margin-right: 10px;
}
.buttongo:hover
{
	background-color: #000000; /* Green */
	color: white;
}
.buttongob
{
	-webkit-transition-duration: 0.4s; 
	transition-duration: 0.4s;
	border-radius: 40px;
	background-color: #2f140d; 
	border: none;
	color: white;
	padding: 25px 50px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 20px;
	margin-bottom: 200px;
	margin-right: 10px;
}
.buttongob:hover
{
	background-color: #000000; /* Green */
	color: white;
}
</style>