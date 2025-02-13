# Introduction I: What is this document
This document gives a brief explanation on what is this folder and
the documents present in it. It provides instructions of usage and whatnots
on how to use these components, how to read and improve them and such.

This document will strive to be clutterless. Clutter may be reserved for 
other more specific and detailed documents on the models and their 
architecture, design, usage, etc. 

This readme file contains the following descriptions:

- Introduction
- Technologies Used
- Usage


# Introduction II: On the folder structure
The AI folder is meant to store source files, documentation files and 
compiled models on the CVAI (CuidarVerdeIA, AKA osirisAI), their models and 
their communication interfaces. This component uses the following structure:

- ./
  - docs
  - API
  - training_scripts
  - training_data
  - old_models

docs folder: hosts files on specific usage of subcomponents, training scripts and others
API: hosts the API, used for connecting to the rest of the app. Quite useful. Also holds the best model.
training_scripts: hosts the crude training_scripts
training_data: hosts the training data gathered for each model
models: every other model created 

# Technologies Used
This section expands on technologies used and the reason they're 
chosen. This section is organized using the following structure:

Computer Language > Frameworks

## Python
Python was carefully chosen as a language for this AI project for these
main reasons:
- Standard
- Portability
- Ease of use
- Team Knowledge and Know-How
- Community Tools and Support

Chosing any other language would impose a learning curve. A 
learning curve takes time to path through. Time is of the essence.
And we are running very low on such essence. And running out of
essence, for all intents and purposes, means failure, therefore, 
dishonor and (metaphorical) !death!.

### TensorFlow and TensorFlowDatasets
Google in this moment is a too-big-to-fail company, meaning 
using a framework developed by google imposes very little risk
on the development of this project. As google cared to implement version
compatibility, this also imposes little or no risk to future maintainability.

Very great.

Also, this framework has almost no initial learning curve, meaning rapid development,
though it does impose a steep learning curve later for more advanced features such as 
cache creation, image pre-processing steps with layers, custom training loops and callbacks.
