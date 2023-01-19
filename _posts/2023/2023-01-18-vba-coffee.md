---
layout: post
title: 用40行 Word VBA 換來一杯咖啡
date: 2023-01-18
category: 誌
tags: [egg, 同事, vba]
mathjax: true
mathjax_autoNumber: false
---

<img src="/blog/assets/images/2023/vbacoffee.jpg" style="width:300px"/>

<!--more-->

幫同事解決75家客戶的自動發送客製化email信，\\
裡頭各自夾帶\\
客製化 *.pdf 信函、\\
客製化 *.xlsx 檔、\\
客製化 *.docx 空白回覆表。\\
初次嘗試用Word操作Excel就上手。


```
Option Explicit
Sub newletter()

Dim xlApp, xlsheets, xls, OutApp, OutMail As Object
Dim i, j, k, n As Integer
Dim R, strbody As String
Dim dataArry As Variant

R = ActiveDocument.Path & "\"
Set xlApp = CreateObject("Excel.Application")
Set xlsheets = xlApp.Workbooks.Open(R & "data.xlsx")
xlApp.Visible = True
Set xls = xlsheets.worksheets("data")
n = xls.Range("A1").End(xlDown).Row
dataArry = xls.Range("A2:J" & n) 

' ******  正式來改成 To n-1 (會寄 n-2 封信)*******
For i = 2 To n - 1
    With ActiveDocument.Content.Find
        For j = 2 To 4
            .Text = dataArry(i - 1, j)
            'MsgBox dataArry(i, j)
            .Replacement.Text = dataArry(i, j)
            .Execute Replace:=wdReplaceAll, Forward:=True, Wrap:=wdFindContinue
        Next
    End With
    ActiveDocument.ExportAsFixedFormat OutputFileName:=R & dataArry(i, 2) & "函.pdf", ExportFormat:=wdExportFormatPDF, OpenAfterExport:=False
    ' ********* 寄信
    Set OutApp = CreateObject("Outlook.Application")
    Set OutMail = OutApp.CreateItem(0)
    strbody = "<HTML><BODY>您好，<br><br>我是。<br>案之說明，交由我代轉信函向 您致意。<br><br>貴 公司詳細情形如下：<br>未接觸的有效客戶有" & dataArry(i, 7) & "件、<br>未接觸的停效客戶有" & dataArry(i, 8) & "件、<br> 申訴客戶有" & dataArry(i, 10) & "件。<br><br>若有任何問題，您可洽本公司業推或與我聯絡。<br><br><b>謝謝!<b></BODY></HTML> "
    With OutMail
        .Display
        .To = dataArry(i, 5)
        '.CC = ""
        '.Bcc =""
        .Subject = "總經理給" & dataArry(i, 2) & "信函測試"
        .attachments.Add (R & dataArry(i, 2) & "函..pdf")
        .HTMLBody = strbody & "<br>" & .HTMLBody
        '.send
    End With
Next

'  ***** 回復原始設定
With ActiveDocument.Content.Find
    For k = 2 To 4
        .Text = dataArry(i - 1, k)
        .Replacement.Text = dataArry(1, k)
        .Execute Replace:=wdReplaceAll, Forward:=True, Wrap:=wdFindContinue
    Next
End With

xlApp.Quit 

End Sub
```
