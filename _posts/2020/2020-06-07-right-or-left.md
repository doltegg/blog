---
layout: post
title: 左手打右手
date: 2020-06-07 11:24:11 +0000
category: 評
tags: [課, 數]
---

<img src="https://doltegg.github.io/blog/assets/images/2020/SASem.jpg" style="width:600px;"/>

星期四、五我去上了一門 SAS 公司特別為我們部門開的一堂教育訓練課程，課程名稱為「金融資料 (客戶消費預測) 採礦預測模型」。所謂「特別為我們開的」的意思是免費的，而且只有我們處的人，不是開給許多公司或其他部門。當然他們會這麼做主要是要推廣 SAS EM (SAS Enterprise Miner) 軟體，希望我們在他們的示範過後，能付錢購買使用。


<!--more-->
 
課程主要介紹三種模型：決策樹、邏吉斯迴歸和類神經網路。都說了是特別為我們開的，所以去上該課的人只有屬於我們處的 6 個人。 
 
第一天課程範圍主要是在閒話家常及資料定義與處理，下午開始進入第一個模型─決策樹。小時候所學的統計學曾經聽過「決策樹」三個字，卻從來沒有實際操作過，所以很自然一切都依老師老師所示範的做法與思路。

在資料遺漏值補完後，老師將資料樣本平均分配為二部分，其中一半資料拿來「訓練」 (training) 參數值，另一半則拿來「驗證」 (validation) 所訓練出來的參數值的正確性。

乍聽之下，好像也沒什麼問題，為了要找到最佳模型配適參數，訓練資料集可以看成是加速踏板，驗證資料集就變成煞車踏板，藉由加速與煞車的相輔相成及相互牽制，找到一個平衡點，維持安全駕駛，很有道理。第一天的課程最後把決策樹講完，老師預告明天將要進入邏吉斯迴歸，用今天相同的手法，用一半的資料來估計參數，之後再用另一半資料來驗證所估計出來的參數的正確性。

聽到此，我有一種隱隱不安的情緒正在醞釀。但隨著課程時間完了，下課一途是再自然天經地義理所當然的事，特別是這個課程結束時間比正常下班時間還早時，更應該盡快離開教室，早點下班去。一切等明天再說吧！

第二天課程開始不久，我終於按捺不住舉手發問。

老師看到我舉手，攤開右手朝我的方向舉過來，手掌向上，示意我發言。

「我先講個故事，」這個故事並非疑問，只是一種我覺得很怪異的現象。為了尊重老師，我先宣告說我先講一個我所編造出的一個我過意不去的故事，它嚴重影響我的學習情緒，所以我想與大家分享一個故事。

老師點點頭，沒有打斷我的發言，表現出想讓我繼續說下去的意願，所以我繼續把我的故事往下講。


> 假設我要估全台灣成年人的平均身高，然而全台灣成年人口約 2000 萬人，而耗盡九牛二虎之力拿到了約 100 萬個成年人樣本的身高資料，於是我把 100 萬個樣本身高分成二部分，一部分為 50 萬個樣本當成訓練資料，另外 50 萬個樣本當成驗證資料。
> 
> 依照昨天到今天的上課內容，我先把訓練資料的 50 萬個樣本身高平均，得到 156 公分。
> 
> 接著再把驗證資料平均，得到 160 公分。
> 
> 所以我應該用驗證資料的 160 公分的結果將訓練資料的 156 公分給否定了！
> 
> 這不是左手打右手嗎？


老師聽完我的故事後，「直接用 100 萬個樣本求平均就好了。」

「對，這就是我的問題。當我們運用二組資料找到了所謂的最佳配適的參數模型後，為何還只是用預測 (一半) 的資料來訓練，而不是用全部 (訓練 + 驗證) 資料去估計。」

老師很盡責的回答我：「我沒有想過你的問題耶！」

原來從昨天到今天，一直困擾著我的是：打架時，我究竟應該用右手還是左手？

如果你不問我應該用右手還是左手，我一定是先用嘴巴問候對方長輩，然後左手、右手兼雙腳並用。
