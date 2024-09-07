import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { environment } from './environment'
import { Logger } from '@nestjs/common'

async function bootstrap() {
    const { host, port } = environment.app
    const app = await NestFactory.create(AppModule)
    await app.listen(port, host, () =>
        Logger.log(`Users service started on "${host}:${port}"`),
    )
}
bootstrap().then()
