if ( !(username=="abhi" && password=="12") )
if (username != "abhi" || password != "12") {
   res.status(401).json({ "msg": "I am bad boy" });
}
