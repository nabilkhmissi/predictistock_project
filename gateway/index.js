const express = require("express")
const app = express();
const cors = require("cors")
const { createProxyMiddleware } = require("http-proxy-middleware");
const config = require('./config/config')

const PORT = config.GATEWAY_PORT;
const USER_PORT = config.USER_PORT;
const ARTICLE_PORT = config.ARTICLE_PORT;
const CLIENT_PORT = config.CLIENT_PORT;


app.use(cors());

// gateway for users app 
app.use("/clients", createProxyMiddleware({
    target: `${config.MAIN_URL}:${USER_PORT}/clients`,
    pathRewrite: {
        '^/clients': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/auth", createProxyMiddleware({
    target: `${config.MAIN_URL}:${USER_PORT}/auth`,
    pathRewrite: {
        '^/auth': '',
    },
}))
app.use("/company", createProxyMiddleware({
    target: `${config.MAIN_URL}:${USER_PORT}/company`,
    pathRewrite: {
        '^/company': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/subscription", createProxyMiddleware({
    target: `${config.MAIN_URL}:${USER_PORT}/subscription`,
    pathRewrite: {
        '^/subscription': '', // This rewrites the path to remove the "/auth" prefix
    },
}))
app.use("/subscription-type", createProxyMiddleware({
    target: `${config.MAIN_URL}:${USER_PORT}/subscription-type`,
    pathRewrite: {
        '^/subscription-type': ''
    }
}))
// gateway for article app 
app.use("/article", createProxyMiddleware({
    target: `${config.MAIN_URL}:${ARTICLE_PORT}/article`,
    pathRewrite: {
        '^/article': ''
    }
}))

app.use("/category", createProxyMiddleware({
    target: `${config.MAIN_URL}:${ARTICLE_PORT}/category`,
    pathRewrite: {
        '^/category': ''
    }
}))
app.use("/company-order", createProxyMiddleware({
    target: `${config.MAIN_URL}:${ARTICLE_PORT}/company-order`,
    pathRewrite: {
        '^/company-order': ''
    }
}))

app.use("/supplier", createProxyMiddleware({
    target: `${config.MAIN_URL}:${ARTICLE_PORT}/supplier`,
    pathRewrite: {
        '^/supplier': ''
    }
}))

// gateway for client app 
app.use("/customer", createProxyMiddleware({
    target: `${config.MAIN_URL}:${CLIENT_PORT}/customer`,
    pathRewrite: {
        '^/customer': ''
    }
}))

app.use("/activity", createProxyMiddleware({
    target: `${config.MAIN_URL}:${CLIENT_PORT}/activity`,
    pathRewrite: {
        '^/activity': ''
    }
}))

app.use("/customer-order", createProxyMiddleware({
    target: `${config.MAIN_URL}:${CLIENT_PORT}/customer-order`,
    pathRewrite: {
        '^/customer-order': ''
    }
}))


app.listen(PORT, () => console.log("gateway listening on port... " + PORT));