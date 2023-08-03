import { app } from "./app"

app.listen(process.env.PORT || 8080, () => console.log(`\u{1F525} Server ${process.env.PORT || 8080} is running!`))