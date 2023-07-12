import subprocess

# Function to merge a repository into a branch
def merge_repo(repo_url, repo_name):
    # Add the repository as a remote
    subprocess.run(['git', 'remote', 'add', repo_name, repo_url])

    # Fetch the remote branches
    subprocess.run(['git', 'fetch', repo_name])

    # Create and switch to a new branch
    subprocess.run(['git', 'checkout', '-b', repo_name])

    # Merge the repository's main branch into the current branch
    subprocess.run(['git', 'merge', f'{repo_name}/main', '--allow-unrelated-histories'])

    # Resolve conflicts if any

    # Commit the changes
    subprocess.run(['git', 'add', '.'])
    subprocess.run(['git', 'commit', '-m', f'Merge {repo_name} into branch'])

    # Push the branch to the home repository
    subprocess.run(['git', 'push', 'origin', repo_name])

    # Remove the remote
    subprocess.run(['git', 'remote', 'remove', repo_name])

# Merge repositories one by one
merge_repo('https://github.com/2005balaji/Js-closures.git', 'Js-closures')
# merge_repo('https://github.com/2005balaji/lab--on--react-props.git', 'lab--on--react-props')
# merge_repo('https://github.com/2005balaji/Lab-on-GRID.git', 'Lab-on-GRID')
# merge_repo('https://github.com/2005balaji/Lab-on-Js-Promise.git', 'Lab-on-Js-Promise')
# ... repeat the above line for each repository in the list
