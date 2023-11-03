const express = require("express")
const app = express();
const cors = require("cors")
const { createProxyMiddleware } = require("http-proxy-middleware")

const PORT = 8000;

app.use(cors());

// gateway for users app 
app.use("/clients", createProxyMiddleware({
    target: "http://127.0.0.1:8089/clients",
    pathRewrite: {
        '^/clients': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/auth", createProxyMiddleware({
    target: "http://127.0.0.1:8089/auth",
    pathRewrite: {
        '^/auth': '',
    },
}))
app.use("/company", createProxyMiddleware({
    target: "http://127.0.0.1:8089/company",
    pathRewrite: {
        '^/company': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/subscription", createProxyMiddleware({
    target: "http://127.0.0.1:8089/subscription",
    pathRewrite: {
        '^/subscription': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/subscription-type", createProxyMiddleware({
    target: "http://127.0.0.1:8089/subscription-type",
    pathRewrite: {
        '^/subscription-type': ''
    }
}))
// gateway for article app 
app.use("/article", createProxyMiddleware({
    target: "http://127.0.0.1:3000/article",
    pathRewrite: {
        '^/article': ''
    }
}))

app.use("/category", createProxyMiddleware({
    target: "http://127.0.0.1:3000/category",
    pathRewrite: {
        '^/category': ''
    }
}))
app.use("/company-order", createProxyMiddleware({
    target: "http://127.0.0.1:3000/company-order",
    pathRewrite: {
        '^/company-order': ''
    }
}))

app.use("/supplier", createProxyMiddleware({
    target: "http://127.0.0.1:3000/supplier",
    pathRewrite: {
        '^/supplier': ''
    }
}))

// gateway for client app 
app.use("/customer", createProxyMiddleware({
    target: "http://127.0.0.1:3001/customer",
    pathRewrite: {
        '^/customer': ''
    }
}))

app.use("/activity", createProxyMiddleware({
    target: "http://127.0.0.1:3001/activity",
    pathRewrite: {
        '^/activity': ''
    }
}))

app.use("/customer-order", createProxyMiddleware({
    target: "http://127.0.0.1:3001/customer-order",
    pathRewrite: {
        '^/customer-order': ''
    }
}))


app.listen(PORT, () => console.log("gateway listening on port " + PORT));