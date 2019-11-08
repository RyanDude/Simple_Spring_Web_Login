package com.example.Review.entity;

public class ParamPageInfo<T> {
    // 当前页
    private Integer pageNum = 1;
    // 页面大小
    private Integer pageSize = 10;
    // 请求参数
    private T params;

    public Integer getPageNum() {
        return pageNum;
    }

    public void setPageNum(Integer pageNum) {
        this.pageNum = pageNum;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public T getParams() {
        return params;
    }

    public void setParams(T params) {
        this.params = params;
    }
}
