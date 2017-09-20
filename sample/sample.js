// windowオブジェクトのカスタムトリガー「changeBreakPoint」をバインドするとブレイクポイント変更時にこのイベントが発火する
// 第2引数に変更後のブレイクポイントが入る
$(window).on('changeBrakPoint', function(event, breanPoint) {
    console.log(breanPoint);
});