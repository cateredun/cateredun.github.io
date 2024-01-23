(function(){
	let urlParams = new URLSearchParams(window.location.search);
	let id = urlParams.get('ar');
    let mbot = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);
    if(id) {
        if(mbot) location.replace('https://s.click.aliexpress.com/deep_link.htm?aff_short_key=_DDoujiR&dl_target_url=https%3A%2F%2Far.aliexpress.com%2Fi%2F'+id+'.html');
        else location.href = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key=_DDoujiR&dl_target_url=https://www.aliexpress.com/item/'+id+'.html';
    }
})();
