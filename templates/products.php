<div class="row">
	<div class="left"><img src="foto/<?php echo $result_->image; ?>" alt="<?php echo $result_->image; ?>"></div>
	<div class="left">
		<?php echo '<h3>'.$result_->name.'</h3>'; ?>
	</div>
	<div class="left">
		<?php echo '<p>'.'R'.$result_->diameter.'/'.$result_->width.'</p>'; ?>
	</div>
	<div class="left">
		<?php echo '<p>'.'psd:'.$result_->pcd.' et:'.$result_->et.' type:'.$result_->type.' logo:'.$result_->logo.'</p>'; ?>
	</div>
	<?php if($result_->in_stock ==1) {
		echo '<div class="left" style="color:green"><h3>В наличии</h3></div>';
	}else{
		echo '<div class="left" style="color:red"><h3>Нет в наличии</h3></div>';
	}
	 ?> 
	<div class="left">
		<?php echo '<h3 style="color:red"><strike>'.$result_->price.'грн</strike></h3>'; ?>
	</div>
	<div class="left">
		<?php echo '<h3 style="color:green">'.$result_->discount_price.'грн</h3>'; ?>
	</div>
	<?php if($result_->in_stock ==1) {
		echo '<div class="left" style="color:green"><h3><input type="button" value="В Корзину"/></h3></div>';
	} ?>
<?php

 ?>
</div>