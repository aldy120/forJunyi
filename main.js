// 1
function outputReverse(arr){
	(function reverseAll(arr) {
		for (a of arr) {
			if (Array.isArray(a)) {
				reverseAll(a)
			}
		}
		arr.reverse();
	})(arr);
	return arr;
}

// 2
function findlen(n) {
	var count = 0;
	for (var i = 1;i <= n ;i ++) {
		if (i % 15 === 0 || !(i % 3 === 0 || i % 5 === 0)){
			count++;
		}
	}
	return count;
}

// 3
假設三個袋子上面的標籤分別是 pencil , pen, 與 mixed 。
那麼選擇 mixed 裡面挑一支筆，則有下列兩種可能

- 拿出 鉛筆
那麼你知道 mixed 必全是 鉛筆。(因為貼mix只能是全部同一種筆)
pen 裡面則都是 混合的。(有可能是鉛筆或混合，但鉛筆被 mixed 選走了)
而 pencil 必全是 原子筆。(有可能是原子筆或混合，但混合被 pen 選走了)

- 拿出的是 原子筆
那麼你知道 mixed 裡面全是原子筆。
pencil 裡面則都是鉛筆。(有可能是原子筆或混合，但原子筆被 mixed 選走了)
pen 裡面則都是混合的。(鉛筆和原子筆都被選走了)

// 4

900 = 大特價750 + 剩下的150 
剩下的150 = "服務生私吞60" + 私吞完剩下的90
私吞完剩下的90 = 退還給遊客的30 * 3

900 = 每人付的300 * 3
	= (實際上付的270 + 被退還30) * 3 = "810" + 90

--

問題就出在 810 + 60 這裡，把兩個不相干的東西加在一起，本來就不應該要等於900。

正確的列式是

三人實際付的810 = 大特價的750 + 服務生拿走的60
