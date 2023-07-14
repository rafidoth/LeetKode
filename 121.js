const prices = [2,1,2,1,0,1,2]
//t: 121. Best Time to Buy and Sell Stock\\
//l: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/\\

//cs
var maxProfit = function(prices) {
    let [maxprofit, buy] = [0,0]
    for(let sell =1;sell<prices.length;sell++){
        if(prices[buy]>prices[sell]){
            buy=sell;
        }
        maxprofit = Math.max(maxprofit,prices[sell]-prices[buy])
    }
    return maxprofit
};
//ce

//d:time complexity $O(n^2)$  memory $O(1)$\\
//cs
var maxProfit = function(prices) {
    let max_profit = 0;
    for(let i =0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            const profit = prices[j] - prices[i];
            if(profit>max_profit) max_profit= profit;
        }
    }
    return max_profit
};
//ce



console.log(maxProfit(prices))