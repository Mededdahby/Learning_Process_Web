#!/bin/bash

# Set the starting date for the commits
START_DATE="2023-10-4T11:00:00"

# Number of commits
NUM_COMMITS=40

# Initialize current date
CURRENT_DATE=$(date -d "$START_DATE" +%s)

# Add a dummy file to ensure there's a change to commit
echo "This is a dummy file." > dummy.txt
git add dummy.txt
git commit -m "Initial commit"
git push origin main

# Commit changes and push to remote repository
for ((i=1; i<=$NUM_COMMITS; i++))
do
  # Generate a random offset between [1, 2, 3, 4, 5, 6, 7] days
  RANDOM_OFFSET=$(( (RANDOM % 4) + 1 ))

  # Increment the current date with the random offset
  CURRENT_DATE=$((CURRENT_DATE + RANDOM_OFFSET * 86400))  # 86400 seconds in a day

  # Create or modify files for each commit
  echo "Content for learning WEB process DAY $i" > "day_$i.txt"
  
  # Optionally, you can modify existing files using commands like sed, echo, etc.
  # For example, to append a line to an existing file:
  # echo "Additional content for DAY $i" >> existing_file.txt

  # Stage the changes
  git add .

  # Commit with the auto-incrementing date and day number in the message
  COMMIT_DATE=$(date -d "@$CURRENT_DATE" --iso-8601=seconds)
  COMMIT_MESSAGE="learning WEB process DAY $i"
  GIT_COMMITTER_DATE="$COMMIT_DATE" GIT_AUTHOR_DATE="$COMMIT_DATE" git commit -m "$COMMIT_MESSAGE"

done

# Fetch and pull changes from remote repository
git fetch origin main
git pull origin main

# Rename the branch to 'main'
git branch -M main

# Add the remote repository if not added already
REMOTE_URL="https://github.com/Mededdahby/Learning_Process_Web.git"

if ! git remote | grep -q "origin"; then
  git remote add origin "$REMOTE_URL"
fi

# Push changes to the remote 'main' branch
git push -u origin main
