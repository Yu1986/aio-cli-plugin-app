/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require('path')
const fs = require('fs-extra')

const BaseCommand = require('../../BaseCommand')
const AppScripts = require('@adobe/aio-app-scripts')

class AddAuthCommand extends BaseCommand {
  async run () {
    const scripts = AppScripts({})
    let manifestFile = path.resolve('./manifest.yml')
    if (!fs.existsSync(manifestFile)) {
      this.error('No manifest found in current folder')
    } else {
      await scripts.addAuth()
    }
  }
}

AddAuthCommand.description = `Add auth actions to the manifest of an Adobe I/O App
`

AddAuthCommand.flags = {
  ...BaseCommand.flags
}

module.exports = AddAuthCommand
