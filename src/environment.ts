import process from 'node:process'

import * as dotenv from 'dotenv'
import env from 'env-var'
import { readFileSync } from 'fs'
import { join } from 'path'

const loadEnv = dotenv.parse(readFileSync(join(__dirname, '..', '.env')))
Object.assign(process.env, loadEnv)

export const environment = {
    app: {
        isProduction:
            env.get('NODE_ENV').default('development').asString() ===
            'production',
        host: env.get('HOST').required().default('localhost').asString(),
        port: env.get('PORT').required().default('3000').asPortNumber(),
    },
}
