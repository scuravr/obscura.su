<?php
$counterFile = '../counter.txt';

// カウンターファイルが存在しない場合は作成
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, '0');
}

// カウンターを読み込み
$count = file_get_contents($counterFile);

// カウンターを増加
$count++;

// カウンターを保存
file_put_contents($counterFile, $count);

// JSONとしてカウンターを返す
header('Content-Type: application/json');
echo json_encode(['count' => $count]);
?>
