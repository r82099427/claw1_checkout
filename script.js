function calculateTotal()
{
  let unit_price={
    sugar: 22,
    butter: 12,
    eggs: 2,
    vanilla:43    
  };
  let Cal_Value={}
  
  Cal_Value.Mdif = (($("#MoneyVal_2").val()-$("#MoneyVal_1").val())*10);
  $("#MoneyDiff").text(Cal_Value.Mdif);
  Cal_Value.Tdif = (($("#TicketVal_2").val()-$("#TicketVal_1").val())*10);
  $("#TicketDiff").text(Cal_Value.Tdif);
  Cal_Value.Wval = (Math.ceil(Cal_Value.Tdif*0.05));
  $("#WaterVal").text(Cal_Value.Wval);
  Cal_Value.Lval = ($("#LastVal").val());
  $("#LVal").text(Cal_Value.Lval);

  Cal_Value.LP = ($("#LastProfit").val());
  $("#LP").text(Cal_Value.LP);
  Cal_Value.Profit = (Cal_Value.Mdif-Cal_Value.Tdif-Cal_Value.Wval-Cal_Value.Lval);
  if(Cal_Value.Profit>=0){
    $("#ProfitVal").text("+"+Cal_Value.Profit);
  }else{
    $("#ProfitVal").text(""+Cal_Value.Profit);
  }

  Cal_Value.FP = (Number(Cal_Value.LP)+Number(Cal_Value.Profit));
  $("#FinalP").text("="+Cal_Value.FP);
  /*
  item_price.butter = ($("#qty_butter").val() * unit_price.butter )
  $("#price_butter").val(item_price.butter);
  
  item_price.eggs = ($("#qty_eggs").val() * unit_price.eggs )
  $("#price_eggs").val(item_price.eggs);  
  
  item_price.vanilla = ($("#qty_vanilla").val() * unit_price.vanilla )
  $("#price_vanilla").val(item_price.vanilla);    
  
  let total = item_price.sugar + item_price.butter + item_price.eggs + item_price.vanilla;

 
  $("#total_value").text(total);
  */
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})
