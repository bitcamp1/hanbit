<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="column add1">
	    
		<div id="divGoods_HotSale" class="ui-module special-mall"><!-- 모듈별 영역 module -->
			<h2 class="invisible">특가상품</h2>
			<h3 class="h3-tit"><img src="http://openimage.interpark.com/tourpark/tour/main/ui_flag1_01.png" alt="홈쇼핑 특가" /></h3>
			<ul class="admin-list">
				<li class="on">
					<a href="javascript:;" id="a_Goods_HotSale">
						<span class="flag"><img id="Modifier_Goods_HotSale" src="" alt="" style="display:none;" /></span>
						<span class="photo"><img id="img_Goods_HotSale" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>
						
						<span id="DisplayExplain_Goods_HotSale" class="tit"></span>
						<span id="DispGoodsNM_Goods_HotSale" class="con"></span>
						<span id="AddValue1_Goods_HotSale" class="data point01"></span>
					</a>
					<!--span class="ui-sns-spot on">
						<a href="#" title="클릭시 페이스북 페이지로 이동 됩니다."><img src="http://openimage.interpark.com/tourpark/tour/main/sns_facebook.gif" alt="페이스북" /></a>
						<a href="#" title="클릭시 페이스북 페이지로 이동 됩니다."><img src="http://openimage.interpark.com/tourpark/tour/main/sns_tweeter.gif" alt="트위터" /></a>
						<a href="#" title="클릭시 페이스북 페이지로 이동 됩니다."><img src="http://openimage.interpark.com/tourpark/tour/main/sns_sms.gif" alt="sms" /></a>
						<a href="#" title="클릭시 페이스북 페이지로 이동 됩니다."><img src="http://openimage.interpark.com/tourpark/tour/main/sns_url.gif" alt="url" /></a>
					</span-->
				</li>
			</ul>
			<div id="subGoods_HotSale" class="ui-rolling">
			</div>
		</div>
		
		<div id="divContents_Banner_0" class="ui-module keyword-event">
			<h2 class="invisible">키워드 배너</h2>
			<p class="small-banner">
			    <a id="a_Contents_Banner_0">
			        <img id="img_Contents_Banner_0" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" />
			    </a>
			</p>
		</div>
		<div id="divGoods_Recomm" class="ui-module travel add1">
			<h2 class="invisible">여행추천상품</h2>
			<h3 class="tit add1 on"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Goods_Recomm_Pkg', 0)" title="현재 패키지여행 상품"><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel01_on.gif" alt="패키지여행" /></a></h3>
			<h3 class="tit add2"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Goods_Recomm_Free', 1)" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel02_off.gif" alt="자유여행" /></a></h3>
			<h3 class="tit add3"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Contents_Airtel', 2)" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel03_off.gif" alt="항공+호텔" /></a></h3>
			<div class="sub-cover">
				<ul class="goods-list">
					<li>
					    <span id="tab_Goods_Recomm"></span>
						<ul class="admin-list">
							<li>
								<a id="a_Goods_Recomm" href="javascript:;">
									<span class="flag"><img id="Modifier_Goods_Recomm" src="" alt="" style="display:none;" /></span>
									<span class="photo"><img id="img_Goods_Recomm" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>
									<span id="DisplayExplain_Goods_Recomm" class="tit"></span>
									<span id="DispGoodsNM_Goods_Recomm" class="con"></span>
									<span id="AddValue1_Goods_Recomm" class="data point01"></span>
								</a>								
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div id="subGoods_Recomm" class="ui-rolling">				
			</div>
		</div>
		<div id="divContents_Airtel" class="ui-module travel add1" style="display:none;">
			<h2 class="invisible">여행추천상품</h2>
			<h3 class="tit add1 on"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Goods_Recomm_Pkg', 0)" title="현재 패키지여행 상품"><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel01_on.gif" alt="패키지여행" /></a></h3>
			<h3 class="tit add2"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Goods_Recomm_Free', 1)" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel02_off.gif" alt="자유여행" /></a></h3>
			<h3 class="tit add3"><a href="javascript:;" onclick="TabClick('Goods_Recomm', 'Contents_Airtel', 2)" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/tit_travel03_off.gif" alt="항공+호텔" /></a></h3>
			<div class="sub-cover">
				<ul class="goods-list">
					<li>
					    <span id="tab_Contents_Airtel"></span>
						<ul class="admin-list">
							<li>
								<a id="a1" href="javascript:;">
									<span class="flag"><img id="Img1" src="" alt="" /></span>
									<span class="photo"><img id="img2" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>
									<span id="Span2" class="tit"></span>
									<span id="Span3" class="con"></span>
									<span id="Span4" class="data point01"></span>
								</a>								
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div id="Div2" class="ui-rolling">				
			</div>
		</div>

		<div id="divGoods_RecommHotel" class="ui-module travel add2">
		    <h2 class="invisible">호텔추천상품</h2>		    
		    <h3 class="tit add1 on"><a href="javascript:;" onclick="TabClick('Goods_RecommHotel', 'Goods_Recomm_Foreign_Hodel', 0);" title="현재 해외호텔 상품"><img src="http://openimage.interpark.com/tourpark/tour/main/tit_hotel01_on.gif" alt="해외호텔" /></a></h3>
			<h3 class="tit add2"><a href="javascript:;" onclick="TabClick('Goods_RecommHotel', 'Goods_Recomm_Domestic_Hotel', 1);" title=""><img src="http://openimage.interpark.com/tourpark/tour/main/tit_hotel02_off.gif" alt="국내호텔" /></a></h3>		    
			<div class="sub-cover">
				<ul class="goods-list">
					<li>
					    <span id="tab_Goods_RecommHotel"></span>
						<ul class="admin-list">
							<li>
								<a id="a_Goods_RecommHotel" href="javascript:;">
									<span class="flag"><img id="Modifier_Goods_RecommHotel" src="" alt="" style="display:none;" /></span>
									<span class="photo"><img id="img_Goods_RecommHotel" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" /></span>
									<span id="DisplayExplain_Goods_RecommHotel" class="tit"></span>
									<span id="DispGoodsNM_Goods_RecommHotel" class="con"></span>
									<span id="AddValue1_Goods_RecommHotel" class="data point01"></span>
								</a>								
							</li>
						</ul>
					</li>
				</ul>5
			</div>
			<div id="subGoods_RecommHotel" class="ui-rolling">	
			    <!--a class="on" title="현재 정보" >1번째 정보</a>
				<a href="#">2번째 정보</a>
				<a href="#">3번째 정보</a-->			
			</div>
		</div>
		
		<div id="divContents_Mall" class="ui-module partner-mall">
			<h2 class="invisible">전문몰 특가</h2>
			<ul class="ui-event-list spot">
				<li class="on">
				    <a href="javascript:;" id="a_Contents_Mall">
				        <img id="img_Contents_Mall" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" />
				    </a>
				</li><!-- 어드민 등록시 대체 택스트 필수 작업 요망 -->				
			</ul>
			<div id="subContents_Mall" class="ui-rolling"> <!-- paging-slide 향후 변경 가능 -->
			</div>
		</div>
		
		<div id="divContents_Banner_1" class="ui-module keyword-event">
	        <h2 class="invisible">키워드 배너</h2>
	        <p class="small-banner">
		        <a id="a_Contents_Banner_1">
			        <img id="img_Contents_Banner_1" src="http://openimage.interpark.com/tourpark/tour/main/no_img1.gif" alt="" />
		        </a>
	        </p>
        </div>
		
	</div>