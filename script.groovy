def buildApp() {
    echo 'building the app'
}

def testApp() {
    echo 'testing the app'
}

def deployApp() {
    echo 'deploying the app'
    echo 'deploying to ${params.STAGING_ENV}'
}

return this