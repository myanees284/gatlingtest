var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "566"
    },
    "maxResponseTime": {
        "total": "816",
        "ok": "216",
        "ko": "816"
    },
    "meanResponseTime": {
        "total": "413",
        "ok": "130",
        "ko": "696"
    },
    "standardDeviation": {
        "total": "291",
        "ok": "54",
        "ko": "78"
    },
    "percentiles1": {
        "total": "391",
        "ok": "127",
        "ko": "702"
    },
    "percentiles2": {
        "total": "699",
        "ok": "167",
        "ko": "756"
    },
    "percentiles3": {
        "total": "770",
        "ok": "208",
        "ko": "794"
    },
    "percentiles4": {
        "total": "807",
        "ok": "214",
        "ko": "812"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    }
},
contents: {
"req_requestname-356e8": {
        type: "REQUEST",
        name: "RequestName",
path: "RequestName",
pathFormatted: "req_requestname-356e8",
stats: {
    "name": "RequestName",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "39",
        "ok": "39",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "216",
        "ok": "216",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles1": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "167",
        "ok": "167",
        "ko": "-"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "-"
    },
    "percentiles4": {
        "total": "214",
        "ok": "214",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 10,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    },"req_requestname-red-a7770": {
        type: "REQUEST",
        name: "RequestName Redirect 1",
path: "RequestName Redirect 1",
pathFormatted: "req_requestname-red-a7770",
stats: {
    "name": "RequestName Redirect 1",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "566",
        "ok": "-",
        "ko": "566"
    },
    "maxResponseTime": {
        "total": "816",
        "ok": "-",
        "ko": "816"
    },
    "meanResponseTime": {
        "total": "696",
        "ok": "-",
        "ko": "696"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "-",
        "ko": "78"
    },
    "percentiles1": {
        "total": "702",
        "ok": "-",
        "ko": "702"
    },
    "percentiles2": {
        "total": "756",
        "ok": "-",
        "ko": "756"
    },
    "percentiles3": {
        "total": "794",
        "ok": "-",
        "ko": "794"
    },
    "percentiles4": {
        "total": "812",
        "ok": "-",
        "ko": "812"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 10,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "-",
        "ko": "5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
