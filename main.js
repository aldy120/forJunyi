// 1
function revserseAll(arr) {
	return reverseAll(arr.)
}

// 2
function findlen(n) {
	var count;
	for (var i = 1;i <= n ;i ++) {
		if ((i % 15) || !(i % 3 || i % 5))
			count++;
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
服務生的錢不是從每人300中拿的，這算法是隨便把數字加一加。