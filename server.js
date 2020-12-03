//บรรทัดนี้คือการเรียกใช้ express นะครับ
const express = require("express")
//ตั้งตัวแปรเพื่อเรียกใช้
const app = express()
//กำหนด port ที่เราจะใช้ใน local host ของเราครับ
const PORT = process.env.PORT || 8080
//นี้คือสิ่งที่เราจะส่งออกไปนะครับ
app.get("/", (req, res) => res.send("you are in the project"))
//เป็นการบบอกให้รอการเชื่อมจ่อ port ของเรา
app.listen(PORT, () => {console.log(`Server is running on port : ${PORT}`)})
//การ export หรือการนำ app นี้ไปใช้บน server นะครับ
module.exports = app
