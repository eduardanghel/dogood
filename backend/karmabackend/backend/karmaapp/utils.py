import psutil

def processcheck(processName):
    """
        Check if there is any running process that contains the given name processName.
        :param processName: name of the process
        :return: bool
    """
    # Iterate over the all the running process
    for proc in psutil.process_iter():
        try:
            # Check if process name contains the given name string.
            if processName.lower() in proc.name().lower():
                return True
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass
    return False