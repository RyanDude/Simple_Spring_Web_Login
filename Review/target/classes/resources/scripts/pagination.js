var data = {
    "code": 1,
    "msg": "",
    "data": {
        "pageNum": 1,
        "pageSize": 5,
        "size": 5,
        "startRow": 0,
        "endRow": 4,
        "total": 5,
        "pages": 1,
        "list": [
            {
                "goodsNo": "80111073",
                "goodsdescribe": "球阀\\NPS3\\CL150\\BA1CFC\\FF\\WCB/F316/PTFE",
                "orderdate": null,
                "pricerange": null,
                "highPrice": 4358.62,
                "lowPrice": 4358.62,
                "unit": "EA",
                "avgPrice": 4358.62,
                "nowprice": 4358.62
            },
            {
                "goodsNo": "81161331",
                "goodsdescribe": "含氧分析仪氧传感器\\0～25VOL%\\DRAGER\\6809630\\防海生物装置",
                "orderdate": null,
                "pricerange": null,
                "highPrice": 5587.95,
                "lowPrice": 5587.95,
                "unit": "EA",
                "avgPrice": 5587.95,
                "nowprice": 5587.95
            },
            {
                "goodsNo": "82621711",
                "goodsdescribe": "中压继电器\\C10-A10X DC24V\\RELECO\\高低压配电柜",
                "orderdate": null,
                "pricerange": null,
                "highPrice": 50.87,
                "lowPrice": 50.87,
                "unit": "EA",
                "avgPrice": 50.8621,
                "nowprice": 50.87
            },
            {
                "goodsNo": "82664511",
                "goodsdescribe": "进气连接管\\WOLF-SAFETY\\A-133\\气动防爆灯",
                "orderdate": null,
                "pricerange": null,
                "highPrice": 147.42,
                "lowPrice": 147.42,
                "unit": "EA",
                "avgPrice": 147.415,
                "nowprice": 147.42
            },
            {
                "goodsNo": "83311095",
                "goodsdescribe": "板片\\ALFA LAVAL\\3672414403\\板式换热器\\M10-MFG",
                "orderdate": null,
                "pricerange": null,
                "highPrice": 1025.87,
                "lowPrice": 1025.87,
                "unit": "EA",
                "avgPrice": 1025.862,
                "nowprice": 1025.87
            }
        ],
        "prePage": 0,
        "nextPage": 0,
        "isFirstPage": true,
        "isLastPage": true,
        "hasPreviousPage": false,
        "hasNextPage": false,
        "navigatePages": 8,
        "navigatepageNums": [
            1
        ],
        "navigateFirstPage": 1,
        "navigateLastPage": 1,
        "lastPage": 1,
        "firstPage": 1
    },
    "pageNum": 0,
    "pageSize": 0,
    "pageTotal": 0
}
$(function() {
	$("#pagination2").pagination({
		currentPage: 1,
		totalPage: 10,
		isShow: false,
		count: 6,
		prevPageText: "< 上一页",
		nextPageText: "下一页 >",
		callback: function(current) {
			$("#current2").text(current)
			search(current,data) //调用search方法
		}
	});

	function search(current,data){
		$("#pagination2").pagination({
		currentPage: data.data.pageNum,
		totalPage: data.data.total,
		isShow: false,
		count: data.data.pageSize,
		prevPageText: "< 上一页",
		nextPageText: "下一页 >",
		callback: function(current) {
			$("#current2").text(current)
			search(current,data)
		}
	});

			for(let i = 0;i < data.data.list.length; i++){

			   var html= `<tr><td>`+ data.data.list[i].avgPrice +`</td>
							<td>`+data.data.list[i].goodsNo+`</td>
							<td>`+data.data.list[i].goodsdescribe+`</td>
							<td>`+data.data.list[i].highPrice+`</td>
							<td>`+data.data.list[i].lowPrice+`</td>
							<td>`+data.data.list[i].nowprice+`</td>
							<td>`+data.data.list[i].orderdate+`</td>
							<td>`+data.data.list[i].pricerange+`</td>
							<td>`+data.data.list[i].unit+`</td></tr>`

				}


		$('#list').find('tr:first').after(html)
	}
})
//当前页 当前页条数

