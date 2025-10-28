#!/bin/bash

# Directory for LaTeX source files
LATEX_SRC_DIR="../src/pages/articles/latex"
CV_SRC_DIR="../src/pages/cv/source"

# Output directory for PDF files
OUTPUT_DIR="../public/pdf"

# Create output directory if it doesn't exist
mkdir -p $OUTPUT_DIR

# Compile LaTeX files for articles
for tex_file in $LATEX_SRC_DIR/*.tex; do
    pdflatex -output-directory=$OUTPUT_DIR $tex_file
done

# Compile LaTeX file for CV
pdflatex -output-directory=$OUTPUT_DIR $CV_SRC_DIR/cv.tex

echo "LaTeX documents have been compiled and are available in the $OUTPUT_DIR directory."