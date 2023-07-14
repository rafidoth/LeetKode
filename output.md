# Welcome to LeetKode
_**Disclaimer:** All the solutions provided in this repo are given by me. They are not guaranteed to be 100% correct or highly efficient. Please use them as a starting point and do your own testing and debugging. You can also take help from other sources to make your code more efficient._


[ 121. Best Time to Buy and Sell Stock]( https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```javascript
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
```


```javascript
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
```

